const base = "http://localhost:3000";

export function route(_path: string) {
	const path = _path.startsWith("/") ? _path.substring(1) : _path;
	return `${base}/${path}`;
}
