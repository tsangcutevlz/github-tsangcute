// 12. Modules: Import / Export
// Khi dùng modules phải add 1 attribute ở thẻ script ( type = "module")
import logger from './Module_Export';
import {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR,
} 
from './Module_testCase';

import * as constants from './Module_testCase'; 
// lấy tất cả các phần tử trong constants trả về object

logger('Type Message,... ', TYPE_WARN);


    // Khi chúng ta import những cái có { } thì là những cái chưa được
    // export default 
    // Nhưng nếu vẫn muốn lấy những cái chưa được export default thì ta có
    // thể dùng * as để lấy tất cả phần tử và trả về object

    // Còn bao h chúng ta import thẳng giống logger bên trên thì là 
    // những cái đã được export default 


    // C1: dùng 2 files liên kết
// File:1
    // import logger from './Module_Export';
// File:2
    // export default logger;

    // C2: dùng 1 file nhưng thao tác cả 2 files 
export { default } from './Module_Export';