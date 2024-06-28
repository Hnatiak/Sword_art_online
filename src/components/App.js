import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import music from './sounds/music.mp3'

const Menu = lazy(() => import("./Menu/Menu"));

export const App = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const playMusic = () => {
    if (!isMusicPlaying) {
      const audio = new Audio(music);
      audio.loop = true;
      audio.play();
      setIsMusicPlaying(true);
    }
  };

  // Додайте обробник події для запуску музики
  useEffect(() => {
    document.addEventListener("click", playMusic);
    return () => {
      document.removeEventListener("click", playMusic);
    };
    // eslint-disable-next-line
  }, [isMusicPlaying]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={<Menu playMusic={playMusic} />}
        />
      </Routes>
    </Suspense>
  );
};
