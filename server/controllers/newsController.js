const scraper = require('../utils/scraper')
const User = require('../models/models.js')
const newsController = {};
const Message = require('../models/models')
newsController.signup =(req,res,next) =>{
  const ema = req.body.email;
  const pass = req.body.password;
  console.log(ema);
    Message.create({email:ema, password:pass}, (err, result) => {
        if (err) {
            res.redirect('/sign-up');
           
        }
        else(
          res.redirect('/')
          
        )
    });
}
newsController.login =(req,res,next) =>{
  const ema = req.body.email; 
  console.log('inside login');
  Message.find({email:ema}, (err, result) => {
    if (err) {
        res.redirect('/sign-up');
        
    }
    else(
      res.redirect('/')
      
    )
});
    
}
//getNews middleware scrapes titles and links from source sites, as specified in server.js
newsController.getearthNews = (req, res, next) => {
  //SERVING UP LAFD headlines / links / pictures (respectively)
  const LAFDArticles = new Promise((resolve, reject) => {
    scraper
      .scrapeLAFD()
      .then(data => {
        resolve(data)
      })
      .catch(err => reject('LAFD scrape failed'))
  })

  //SERVING UP LA Times headlines / links / pictures (respectively)
  const earthLATimesArticles = new Promise((resolve, reject) => {
    scraper
      .scrapeearthLATimes()
      .then(data => {
        resolve(data)
      })
      .catch(err => reject('LA Times scrape failed'))
  })

  //SERVING UP Youtube headlines / links / pictures (respectively)
  const earthyoutubeVideos = new Promise((resolve, reject) => {
    scraper
      .scrapeearthYoutube()
      .then(data => {
        resolve(data)
      })
      .catch(err => reject('YouTube scrape failed'))
  })

  Promise.all([LAFDArticles, earthLATimesArticles, earthyoutubeVideos ])
    .then(data => {
      res.locals.allearthNews = data;
      next()
    })
    .catch(err => res.status(500).send(err))
}
////////////////////////////////////////////////////////////
newsController.getwaterNews = (req, res, next) => {
  //SERVING UP LAFD headlines / links / pictures (respectively)
  const LAFDArticles = new Promise((resolve, reject) => {
    scraper
      .scrapeLAFD()
      .then(data => {
        resolve(data)
      })
      .catch(err => reject('LAFD scrape failed'))
  })

  //SERVING UP LA Times headlines / links / pictures (respectively)
  const waterLATimesArticles = new Promise((resolve, reject) => {
    scraper
      .scrapewaterLATimes()
      .then(data => {
        resolve(data)
      })
      .catch(err => reject('LA Times scrape failed'))
  })

  //SERVING UP Youtube headlines / links / pictures (respectively)
  const wateryoutubeVideos = new Promise((resolve, reject) => {
    scraper
      .scrapewaterYoutube()
      .then(data => {
        resolve(data)
      })
      .catch(err => reject('YouTube scrape failed'))
  })

  Promise.all([ LAFDArticles, waterLATimesArticles, wateryoutubeVideos ])
    .then(data => {
      res.locals.allwaterNews = data;
      next()
    })
    .catch(err => res.status(500).send(err))
}
///////////////////////////////////////////////////
newsController.getwindNews = (req, res, next) => {
  //SERVING UP LAFD headlines / links / pictures (respectively)
  const LAFDArticles = new Promise((resolve, reject) => {
    scraper
      .scrapeLAFD()
      .then(data => {
        resolve(data)
      })
      .catch(err => reject('LAFD scrape failed'))
  })

  //SERVING UP LA Times headlines / links / pictures (respectively)
  const windLATimesArticles = new Promise((resolve, reject) => {
    scraper
      .scrapewindLATimes()
      .then(data => {
        resolve(data)
      })
      .catch(err => reject('LA Times scrape failed'))
  })

  //SERVING UP Youtube headlines / links / pictures (respectively)
  const windyoutubeVideos = new Promise((resolve, reject) => {
    scraper
      .scrapewindYoutube()
      .then(data => {
        resolve(data)
      })
      .catch(err => reject('YouTube scrape failed'))
  })

  Promise.all([ LAFDArticles, windLATimesArticles, windyoutubeVideos ])
    .then(data => {
      res.locals.allwindNews = data;
      next()
    })
    .catch(err => res.status(500).send(err))
}
//////////////////////////////////////////////////////////////
newsController.getfireNews = (req, res, next) => {
  //SERVING UP LAFD headlines / links / pictures (respectively)
  const LAFDArticles = new Promise((resolve, reject) => {
    scraper
      .scrapeLAFD()
      .then(data => {
        resolve(data)
      })
      .catch(err => reject('LAFD scrape failed'))
  })

  //SERVING UP LA Times headlines / links / pictures (respectively)
  const fireLATimesArticles = new Promise((resolve, reject) => {
    scraper
      .scrapefireLATimes()
      .then(data => {
        resolve(data)
      })
      .catch(err => reject('LA Times scrape failed'))
  })

  //SERVING UP Youtube headlines / links / pictures (respectively)
  const fireyoutubeVideos = new Promise((resolve, reject) => {
    scraper
      .scrapefireYoutube()
      .then(data => {
        resolve(data)
      })
      .catch(err => reject('YouTube scrape failed'))
  })

  Promise.all([ LAFDArticles, fireLATimesArticles, fireyoutubeVideos ])
    .then(data => {
      res.locals.allfireNews = data;
      next()
    })
    .catch(err => res.status(500).send(err))
}
//getAlerts middleware scrapes top alerts from LAFD
  //this returns a single array of objects; not nested as returned by .getNews, as it's only scraping from one source
newsController.getAlerts = (req, res, next) => {
  const LAFDAlerts = new Promise((resolve, reject) => {
    scraper
      .scrapeLAFDAlerts()
      .then(data => {
        resolve(data)
      })
      .catch(err => reject('LAFD alerts scrape failed'))
  })
  
  Promise.all([ LAFDAlerts ])
    .then(data => {
      res.locals.alerts = data[0];
      next()
    })
    .catch(err => res.status(500).send(err))
}

module.exports = newsController;