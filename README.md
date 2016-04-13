<h1 align="center">
  <a href="https://www.npmjs.com/package/twifo"><img src="http://rishigiri.com/github/twifo.png" alt="twifo" width="400"></a>
  <br>
</h1>


> Get user information of a Twitter User


## Install

```
$ npm install --save twifo
```

## Usage

```js
const twifo = require('twifo');

twifo('pakalupapito').then(user => {
	console.log(user);
	/*
	{
		name: 'pakalu papito',
		handle: 'pakalupapito',
		bio: 'started from gas station now we here',
		tweet: '2,239',
		followers: '1.51M',
		following: '174',
		likes: '2,349'

	}
	*/
});
```

```
Returns *null* if the value isn't found 
```

## Screenshot

<!--
<h1 align="center">
  <img src="http://rishigiri.com/github/instashot.png" alt="Instavim" width=""></a>
</h1>
-->

## Related

Git-made [ CLI TOOL ](https://github.com/CodeDotJS/git-made)

Git-gave [ CLI TOOL ](https://github.com/CodeDotJS/git-gave)

## License

MIT - Copyright &copy; [Rishi Giri](http://rishigiri.com)
