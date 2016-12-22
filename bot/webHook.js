import debug from 'debug';
debug('Web Hook');

export default (req, res) => {
  console.log('X-GitHub-Event', req.get('X-GitHub-Event'));
  console.log('X-Hub-Signature', req.get('X-Hub-Signature'));
  console.log('X-GitHub-Delivery', req.get('X-GitHub-Delivery'));
  console.log('Payload body', req.body);
  res.send('Data collected!');
}
