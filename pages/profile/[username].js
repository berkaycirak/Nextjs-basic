import { useRouter } from 'next/router';

const ProfileDetail = () => {
	const router = useRouter();
	const { username } = router.query;

	return <div>Hello {username}</div>;
};

export default ProfileDetail;
