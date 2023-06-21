import WebExtPlugin from 'web-ext-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import FileManagerPlugin from 'filemanager-webpack-plugin';
import * as pkgjson from './package.json';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

const BUILD_DIR = path.resolve(__dirname, 'build');

const DIST_DIR = path.resolve(__dirname, 'dist');
const IMG_DIR = path.resolve(__dirname, 'images');

const SRC_DIR = path.resolve(__dirname, 'src');
const MANIFEST_FILE = 'manifest.json';

const manifestPath = path.join(SRC_DIR, MANIFEST_FILE);

function transformName(input) {
	let names = input.split('-');

	names = names.map((val) => {
		if (val === 'rit') {
			return val.toUpperCase();
		}
		return val.charAt(0).toUpperCase() + val.slice(1);
	});
	return names.join(' ');
}

function modify(buffer) {
	// copy-webpack-plugin passes a buffer
	const manifest = JSON.parse(buffer.toString());

	// make any modifications you like, such as
	manifest.version = pkgjson.version;
	manifest.description = pkgjson.description;
	manifest.author = pkgjson.author;
	manifest.name = transformName(pkgjson.name);

	// pretty print to JSON with two spaces
	return JSON.stringify(manifest, null, 2);
}

export default {
	// For some reason, webpack insists on having an entrypoint and making some JS
	// here we give it an entrypoint it cant make anything useful from and then later we use
	// FileManagerPlugin to delete the generated file
	// webpack is only being used to copy data from package.json into manifest.json
	entry: ['./src/manifest.json'],
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: SRC_DIR,
					to: BUILD_DIR,
					filter: async (resourcePath) => !resourcePath.endsWith('manifest.json'),
				},
				{
					from: manifestPath,
					to: BUILD_DIR,
					transform(content) {
						return modify(content);
					},
				},
				{
					from: IMG_DIR,
					to: path.join(BUILD_DIR, 'images'),
				},
			],
		}),
		new FileManagerPlugin({
			events: {
				onEnd: {
					delete: [path.join(DIST_DIR, 'main.js')],
				},
			},
		}),
	],

};
