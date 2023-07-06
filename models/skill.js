const skills = [
    {id: 125223, skill: 'Javascript', done: true},
    {id: 127904, skill: 'Express', done: false},
    {id: 139608, skill: 'Python', done: false}
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return skills;
  }