import express from 'express'
import cors from 'cors'

const app = (express())

app.use(express.json())
app.use(cors())

const dogs = [{
  
    'name':'paco',
    'breed':'ba',
    'age':'55'
  },
  {
    'name':'Bagel',
    'breed':'ruff',
    'age':'50'
  }, 
  {
    'name':'paco',
    'breed':'yorkie',
    'age':'60'
  } 
]

app.get('/', (req, res) => res.send('Welsome to my API'))

app.listen(4000, () => console.log ('Api running on port 4000'))
