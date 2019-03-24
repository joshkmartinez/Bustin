module.exports = (req, res) => {
    res.writeHead(302, {
      'Location': 'https://www.youtube.com/watch?v=0tdyU_gW6WE&feature=youtu.be&t=12'
    })
    res.end()
  }