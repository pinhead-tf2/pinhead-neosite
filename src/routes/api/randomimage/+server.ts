import { json } from '@sveltejs/kit';
import sylis from "$lib/images/sylis-fullbody.jpg";

export function GET() {
	return json(sylis);
}
