import { defineEventHandler, getQuery } from 'h3';
import { ImageResponse } from '@analogjs/content/og';

export default defineEventHandler(async (event) => {
    const fontFile = await fetch(
        'https://cdn.jsdelivr.net/npm/@fontsource/geist-sans/files/geist-sans-latin-700-normal.woff',
    );
    const fontData: ArrayBuffer = await fontFile.arrayBuffer();
    const query = getQuery(event);


const template = `
    <div tw="flex flex-col w-full h-full p-12 items-center text-center justify-center text-white bg-[${query['bgColor'] ?? '#5ce500'}]">
      <h1 tw="flex font-bold text-8xl mb-4 text-black">${query['title'] ?? 'Progress <span class="text-gray-400">Telerik</span>'}</h1>
      <p tw="flex text-5xl mb-12 text-white">${query['description'] ?? 'Kendo UI'}</p>
    </div>
`;

    return new ImageResponse(template, {
        debug: true,
        fonts: [
            {
                name: 'Geist Sans',
                data: fontData,
                weight: 700,
                style: 'normal',
            },
        ],
    });
});