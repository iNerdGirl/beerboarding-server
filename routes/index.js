const express = require('express');
const router = express.Router();
const queries = require('../queries');

/* GET home page. */
router.get('/', (req, res, next) => {
  queries.list('questions')
    .then(questions => 
      queries.list('solvers')
        .then(solvers => 
          queries.list('questions_solvers')
            .then(questions_solvers => 
              queries.list('difficulty')
                .then(difficulty => 
                  res.json({
                    questions: questions,
                    solvers: solvers,
                    questions_solvers: questions_solvers,
                    difficulty: difficulty 
                  })
                )
            )
        )    
    )
    .catch(err => res.status(500).send({ message: err.message }));
});

module.exports = router;
