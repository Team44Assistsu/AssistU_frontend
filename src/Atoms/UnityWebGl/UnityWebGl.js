import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./style.scss";

const UnityWebGl = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Myroom/RWAsprint3.loader.js",
    dataUrl: "Myroom/RWAsprint3.data",
    frameworkUrl: "Myroom/RWAsprint3.framework.js",
    codeUrl: "Myroom/RWAsprint3.wasm",
  });
  return (
    <div className='Unity_Room'>
      <Unity unityProvider={unityProvider} />
    </div>
  );
};

export default UnityWebGl;
