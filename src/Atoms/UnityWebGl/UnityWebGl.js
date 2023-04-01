import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./style.scss";

const UnityWebGl = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Myroom/2.loader.js",
    dataUrl: "Myroom/2.data",
    frameworkUrl: "Myroom/2.framework.js",
    codeUrl: "Myroom/2.wasm",
  });
  return (
    <div className='Unity_Room'>
      <Unity unityProvider={unityProvider} />
    </div>
  );
};

export default UnityWebGl;
