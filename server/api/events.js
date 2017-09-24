import {
  Router
} from 'express'

const router = Router()
const marked = require('marked')
// Mock Users
const events = [{
    uid: "event1",
    title: "Event Title",
    subtitle: "Some subtitle with more info about the event",
    category: "mtc",
    info: {
      start_date: "2017-12-12T12:00:00Z",
      end_date: "2017-12-12T17:00:00Z",
      location: "Somewhere over the Rainbow"
    },
  },
  {
    uid: "event2",
    title: "Event Title",
    subtitle: "Some subtitle with more info about the event",
    description: `
    <p>
    Bacon ipsum dolor amet prosciutto corned beef brisket pork chop bresaola. Drumstick pastrami salami strip steak turkey pig picanha spare ribs. Shankle andouille biltong ham hock fatback, burgdoggen venison bresaola meatloaf. Tenderloin chuck prosciutto kielbasa, t-bone tail filet mignon. Pork bresaola doner, pastrami pancetta shankle alcatra pork chop leberkas cupim.
    </p><p>
    Drumstick strip steak flank pork belly sausage. Meatball doner ham cupim pork chop. Ball tip ham jerky cow shankle. Cupim biltong ham hock jowl sausage fatback picanha meatloaf. Bacon tongue pork belly shank corned beef. Turducken flank brisket jowl tongue venison chicken. Bresaola prosciutto turducken pork belly frankfurter tri-tip.
    </p><p>
    Meatball pancetta prosciutto, ham hock turkey boudin turducken capicola ribeye hamburger. Picanha spare ribs capicola sirloin. Chuck tail salami ground round. Sausage tenderloin doner, corned beef shankle pork loin fatback ribeye ground round burgdoggen sirloin.
    </p>
    `,
    info: {
      start_date: "2017-12-12T12:00:00Z",
      end_date: "2017-12-12T17:00:00Z",
      location: "Somewhere over the Rainbow"
    },
    image: "https://lorempixel.com/600/300/food/5/",
    category: "other"
  },
  {
    uid: "event3",
    title: "Event Title",
    subtitle: "Some subtitle with more info about the event",
    image: "https://lorempixel.com/600/300/food/1/",
    category: "tech",
    info: {
      start_date: "2017-12-12T12:00:00Z",
      end_date: "2017-12-12T17:00:00Z",
      location: "Somewhere over the Rainbow"
    },
  },


  {
    uid: "event4",
    title: "Event Title",
    subtitle: "Some subtitle with more info about the event",
    image: "https://lorempixel.com/600/300/food/4/",
    category: "other",
    info: {
      start_date: "2017-12-12T12:00:00Z",
      end_date: "2017-12-12T17:00:00Z",
      location: "Somewhere over the Rainbow"
    },
  },
  {
    uid: "event5",
    title: "Event Title",
    subtitle: "Some subtitle with more info about the event",
    image: "https://lorempixel.com/600/300/food/3/",
    category: "tech",
    info: {
      start_date: "2017-12-12T12:00:00Z",
      end_date: "2017-12-12T17:00:00Z",
      location: "Somewhere over the Rainbow"
    },
  },

  {
    uid: "event6",
    title: "Event Title",
    subtitle: "Some subtitle with more info about the event",
    category: "mtc",
    info: {
      start_date: "2017-12-12T12:00:00Z",
      end_date: "2017-12-12T17:00:00Z",
      location: "Somewhere over the Rainbow"
    },
  },
  {
    uid: "event7",
    title: "Event Title",
    subtitle: "Some subtitle with more info about the event",
    category: "mtc",
    info: {
      start_date: "2017-12-12T12:00:00Z",
      end_date: "2017-12-12T17:00:00Z",
      location: "Somewhere over the Rainbow"
    },
  },
  {
    uid: "event8",
    title: "Event Title",
    subtitle: "Some subtitle with more info about the event",
    image: "https://lorempixel.com/600/300/food/6/",
    category: "tech",
    info: {
      start_date: "2017-12-12T12:00:00Z",
      end_date: "2017-12-12T17:00:00Z",
      location: "Somewhere over the Rainbow"
    },
  },
  {
    uid: "event9",
    title: "Event Title",
    subtitle: "Some subtitle with more info about the event",
    image: "https://lorempixel.com/600/300/food/7/",
    category: "other",
    info: {
      start_date: "2017-12-12T12:00:00Z",
      end_date: "2017-12-12T17:00:00Z",
      location: "Somewhere over the Rainbow"
    },
  }
]

/* GET users listing. */
router.get('/events', function (req, res, next) {
  res.json(events)
})

/* GET user by ID. */
router.get('/events/:id', function (req, res, next) {
  const id = req.params.id
  let filtered = events.filter((el) => {
    return el.uid === id
  })

  if (filtered.length > 0)
    res.json(filtered[0])
  else res.sendStatus(404)

})

export default router