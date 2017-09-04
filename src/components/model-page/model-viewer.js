// @flow
import React from 'react';
import { connect } from 'react-redux';
import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
import { OrbitControls } from './orbit-controls';

type NoduleType = {
  +WavefrontFilepath: string,
};

type Props = {
  +nodules: Array<NoduleType>,
  +noduleID: string,
  +location: {
    +pathname: string,
  }
};

class ModelViewer extends React.Component {
  componentDidMount() {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.aspectRatio = window.devicePixelRatio / 0.4;
    this.camera =
      new THREE.PerspectiveCamera(50, this.aspectRatio, 1, 1000);
    const {
      nodules,
      noduleID,
    } = this.props;
    const neededNodule = nodules && nodules.find(nodule => nodule.NoduleID === noduleID);
    const objectURL = neededNodule && neededNodule.WavefrontFilepath;
    this.init(objectURL);
    this.animate();
  }
  componentWillUnmount() {
    cancelAnimationFrame(this.animation);
  }
  setSize() {
    const {
      aspectRatio,
      renderer,
    } = this;
    const viewerContainer = document.getElementById('viewer-container');
    const viewerContainerWidth = viewerContainer.clientWidth;
    const viewerContainerHeight = viewerContainer.clientWidth / aspectRatio;
    renderer.setSize(viewerContainerWidth, viewerContainerHeight);
  }
  animate = () => {
    const {
      renderer,
      camera,
      scene,
    } = this;
    this.setSize();
    this.animation = requestAnimationFrame(this.animate);
    renderer.render(scene, camera);
  }
  init = objectURL => {
    const {
      aspectRatio,
      renderer,
      camera,
      scene,
    } = this;
    this.setSize();
    renderer.setPixelRatio(aspectRatio);
    const viewerContainer = document.getElementById('viewer-container');
    viewerContainer.appendChild(renderer.domElement);
    const light = new THREE.PointLight(0xeeeeee, 1, 0, 2);
    camera.add(light);
    scene.add(camera);
    OBJLoader(THREE);
    OrbitControls(THREE);
    this.THREE = THREE;
    const objLoader = new this.THREE.OBJLoader();
    objLoader.load(objectURL, object => {
      const material = new THREE.MeshPhongMaterial({ color: 0x00aeff });
      const geometry = object.children[0].geometry;
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      camera.position.set(50, 100, 50);
      geometry.computeBoundingBox();
      mesh.position.set(
        0 - (geometry.boundingBox.max.x / 2),
        0 - (geometry.boundingBox.max.y / 2),
        0 - (geometry.boundingBox.max.z / 2),
      );
      camera.lookAt(scene.position);
    });
    const controls = new this.THREE.OrbitControls(camera, renderer.domElement); // eslint-disable-line
    renderer.render(scene, camera);
  }
  props: Props
  render() {
    return (
      <div id="viewer-container" />
    );
  }
}

const mapStateToProps = ({ selectedStudy: { nodules } }) => ({
  nodules,
});

export default connect(mapStateToProps)(ModelViewer);
