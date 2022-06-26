import {
    TYPE_LOG,
    TYPE_WARN,
    TUPE_ERROR,
} from './Module_testCase';

function logger(log, type = TYPE_LOG){
    console[type](log);
}

export default logger; // cho phép logger xuất ra



