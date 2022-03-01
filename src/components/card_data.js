const card_data = {
  items: [
    {
      id: 'card1',
      title: 'PlaThyme',
      images: ['/images/plathyme1.gif','/images/plathyme2.gif'],
      body: 'From scratch I made a website using socket.io and react for real time multi-player games. I\'m especially proud of my implementation of a board game. Also the pictonary game was pretty cool too.',
      video: null,
      link: 'https://github.com/PlaThyme/PlaThyme'
    },
    {
      id: 'card2',
      title: 'Eight Queens Solver',
      body: 'This is a genetic algorithm that solves the eight queens problem. This is one of the more fun projects I had to solve in my AI coursework.',
      images: ['/images/8queens.jpg'],
      video: null,
      link: 'https://github.com/dwareb/geneightqueens'
    },
    {
      id: 'card3',
      title: 'Snake Terminal Game',
      images: ['/images/snake.gif'],
      body: 'Written in C++ this is just a little toy snake game I made when screwing around. I like the way it turned out though! Unfortunately, I can\'t find my source code for this right now.',
      video: null,
      link: null
    },
    {
      id: 'card4',
      title: 'NLP Sentiment Analysis',
      images: ['/images/tomatoes.jpg'],
      body: 'For an AI project I worked on a natural language processing algorithm for sentiment analysis. The data set we used was movie reviews. The project involved comparing Naive Bayes and a Recurrent Neural Network.',
      video: null,
      link: 'https://github.com/dwareb/CS441_Final_NLP'
    },
    {
      id: 'card5',
      title: 'Dungeon',
      images: ['/images/dungeon1.png','/images/dungeon3.png','/images/dungeon4.jpg','/images/dungeon5.jpg'],
      body: 'I am especially proud of this. I integrated electronics, and crafts to make a pretty darn striking dungeon. Its controlled by an arduino, and has multiple functions. See the controller card for more info.',
      video: ['/images/dungeon.mp4'],
      link: null
    },
    {
      id: 'card6',
      title: 'Dungeon Controller',
      images: ['/images/controller1.jpg','/images/controller2.jpg'],
      body: 'This controller and smoke machine both controls the lighting and smoke for a dungeon. I designed the cases for these myself in CAD, and then 3d printing them. The controller is built on an arduino and written in C++.',
      video: null,
      link: null
    },    
    {
      id: 'card7',
      title: 'Macro Pad',
      images: ['/images/macropad1.jpg','/images/macropad2.jpg','/images/macropad3.jpg'],
      body: 'I wanted  a stream deck, and macro pad, so I made one. The nice part about making one is I get to write the controlling software and can make it do whatever I want. I designed the case in CAD and 3D printed it. Plus RGB!',
      video: null,
      link: null
    },    
    {
      id: 'card8',
      title: 'Beholder Miniature',
      images: ['/images/beholder1.jpg','/images/beholder2.jpg','/images/beholder3.jpg'],
      body: 'I really am pleased with how this miniature came out, the glisten in the eyes, and the saliva hanging from the teeth was a nice touch.',
      video: null,
      link: null
    },
    {
      id: 'card9',
      title: 'Desktop',
      images: ['/images/table1.jpg','/images/table2.jpg','/images/table3.jpg'],
      body: 'I made the tabletop for my sit to stand desk. Made it from reclaimed lumber, and I think the resin touches turned out quite nice.',
      video: null,
      link: null
    },

    {
      id: 'card10',
      title: 'Hot Sauce',
      images:['/images/hotsauce.jpg'],
      body: 'This last summer I got an urge to make some hot sauce. My father happened to be growing some hot peppers in his garden and I used them to make a deliciously spicy spread.',
    },
    {
      id: 'card11',
      title: 'Wizard Mini',
      images: ['/images/wizard1.jpg', '/images/wizard2.jpg', '/images/wizard3.jpg'],
      body: 'This miniature turned out really well. The details on the cape and the lighting turned out especially well, but I could have done a bit better with light fall off over distance. Always more to learn.',
      video: null,
      link: null
    },
    {
      id: 'card12',
      title: 'Baba Yaga Hut',
      images: ['/images/babayaga1.jpg','/images/babayaga2.jpg','/images/babayaga3.jpg'],
      body: 'I made this out of coffee stir sticks, hot glue and a dinosaur toy. Looks surprisingly good despite the simple materials.',
      video: null,
      link: null
    },
    {
      id: 'card13',
      title: 'Gundam',
      images: ['/images/gundam1.jpg','/images/gundam2.jpg','/images/gundam3.jpg'],
      body: 'I like making models in addition to miniatures, and I think Gunpla Gundams are a great way to meld those two things. I love how the chrome bits turned out.',
      video: null,
      link: null
    },
    {
      id: 'card14',
      title: 'A-Wing',
      images: ['/images/awing.jpg'],
      body: 'This was a relatively easy model to put together, but some care with the paint job went a long way.',
      video: null,
      link: null
    },
    {
      id: 'card15',
      title: 'Headboard',
      images: ['/images/headboard1.jpg','/images/headboard2.jpg','/images/headboard3.jpg'],
      body: 'I couldn\'t find a headboard that I liked in any store, so I made one myself. I tried to include some touches inspired by japanese style woodworking.',
      video: null,
      link: null
    },    
    {
      id: 'card16',
      title: 'Kenku Mini',
      images: ['/images/kenku1.jpg','/images/kenku2.jpg'],
      body: 'This is one of my favorite miniatures that I\'ve painted. The iridescent feathers were a new technique for me, and I love the results.',
      video: null,
      link: null
    },    
    {
      id: 'card17',
      title: 'Knight Mini',
      images: ['/images/knight1.gif','/images/knight2.jpg','/images/knight3.jpg'],
      body: 'I put more effort into this than might be apparent at first glance. The back of the cloak has a pattern on it that I meticulously painted.',
      video: null,
      link: null
    },    
    {
      id: 'card18',
      title: 'Mallet',
      images: ['/images/mallet1.jpg','/images/mallet2.jpg','/images/mallet3.jpg'],
      body: 'This mallet was basically the first wood working project I ever attempted. I made it out of hand tools only, and from firewood I found in the road one day on my way to work.',
      video: null,
      link: null
    },    
    {
      id: 'card19',
      title: 'More Miniatures',
      images: ['/images/miniature1.jpg','/images/miniature2.jpg','/images/miniature3.jpg','/images/miniature4.jpg'],
      body: 'This is just a selection of miniatures that I painted, or 3d printed and painted. I just want to show them off.',
      video: null,
      link: null
    },    
    {
      id: 'card20',
      title: 'Pixel Art',
      images: ['/images/perler1.jpg','/images/perler2.jpg','/images/perler3.jpg','/images/perler4.jpg'],
      body: 'Made from perler beads, I made these and have them hanging around my house, or given as gifts to my friends',
      video: null,
      link: null
    },
  ]
};

export default card_data;