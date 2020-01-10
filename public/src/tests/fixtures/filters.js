import moment from 'moment';

const filters = {
    text : '',
    sortBy : 'date', // date or amount
    startDate : undefined,
    endDate : undefined
};

const altfilters = {
    text : 'rent',
    sortBy : 'amount', // date or amount
    startDate : moment(0),
    endDate : moment(0).add(1,'days')
};

export {filters,altfilters};

