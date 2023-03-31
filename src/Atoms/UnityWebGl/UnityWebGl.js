import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./style.scss";

const UnityWebGl = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Myroom/Updatedunity.loader.js",
    dataUrl: "Myroom/Updatedunity.data",
    frameworkUrl: "Myroom/Updatedunity.framework.js",
    codeUrl: "Myroom/Updatedunity.wasm",
  });
  return (
    <div className='Unity_Room'>
      <Unity unityProvider={unityProvider} />
    </div>
  );
};

export default UnityWebGl;
