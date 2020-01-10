import moment from 'moment';

export default [{
    id :'1',
    description : 'Rent',
    note:'',
    amount: 12,
    createdAt: moment(0)
  },
  {
   id :'2',
   description : 'Gas',
   note:'',
   amount: 6,
   createdAt: moment(0).subtract(4,'days').valueOf()
  },
  {
   id :'3',
   description : 'Leundry',
   note:'',
   amount: 18,
   createdAt: moment(0).add(4,'days').valueOf()
  }];