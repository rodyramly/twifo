import test from 'ava';
import fn from './';

test(async t => {
	const user = await fn('Where');

	t.is(user.name, '@log');
	t.is(user.handle, 'pakalupapito');
	t.is(user.bio, 'started from gas station now we here.');
	t.is(user.tweets, '2,315');
	t.is(user.followers, '1.65M');
	t.is(user.following, '177');
	t.is(user.likes, '2,328');
});
