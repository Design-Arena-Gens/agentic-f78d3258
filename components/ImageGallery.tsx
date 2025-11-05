'use client';

import React, { useState } from 'react';

export function ImageGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="gallery card section">
      <div className="thumb-list" role="listbox" aria-label="?????????">
        {images.map((src, i) => (
          <button
            key={src + i}
            className={"thumb " + (i === active ? 'active' : '')}
            onClick={() => setActive(i)}
            aria-label={`??????????? ${i + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="????????? ??????" />
          </button>
        ))}
      </div>
      <div className="main-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={images[active]} alt="??????????? ??????" />
      </div>
    </div>
  );
}
