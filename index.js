import express from 'express'
import cors from 'cors'

const app = (express())

app.use(express.json())
app.use(cors())

const dogs = [{
  
    'name':'paco',
    'breed':'bulldog',
    'age':'55'
  },
  {
    'name':'bagel',
    'breed':'akita',
    'age':'50'
  }, 
  {
    'name':'chacha',
    'breed':'yorkie',
    'age':'60'
  } 
]

app.get('/', (req, res) => res.send(dogs))

app.listen(4000, () => console.log ('Api running on port 4000'))
