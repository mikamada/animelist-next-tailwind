import Link from "next/link";
import { authUserSession } from "@/services/auth";

const UserButton = async () => {
	const user = await authUserSession();
	const actionLabel = user ? "Sign Out" : "Sign In";
	const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";

	return (
		<div>
			<Link href={actionUrl} className="text-color-primary">
				{actionLabel}
			</Link>
		</div>
	);
};

export default UserButton;
