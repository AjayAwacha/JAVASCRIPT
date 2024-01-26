const day = 'thurs';

switch(day) {
    case 'monday':   // day === monday
        console.log('today is monday');
        // break;
    case 'tuesday':
    case 'wednesday': // day === 'tuesday' || day === 'wednesday'
         console.log('today is tuesday');
         break;
    case 'thursday':
        console.log('today is thursad');
        break;
    default:
        console.log('no case match');
}