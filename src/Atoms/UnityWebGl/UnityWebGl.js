import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./style.scss";

const UnityWebGl = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/webgl.loader.js",
    dataUrl: "Build/webgl.data",
    frameworkUrl: "Build/build.framework.js",
    codeUrl: "Build/build.wasm",
  });
  return (
    <div className='Unity_Room'>
      <Unity unityProvider={unityProvider} />
    </div>
  );
};

export default UnityWebGl;
