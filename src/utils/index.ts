/**
 * Created by TaylorTang on 2019/7/2.
 */

// 格式化时间
export function getCurrentTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month =
        date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minute =
        date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const second =
        date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

export const testName: string = 'Bruce';

// 格式化时分秒

export function getHMSTime(date: Date, flag: boolean= true): string {
    let year;
    let day;
    let month;
    if (flag) {
        year = date.getFullYear();
        month =
            date.getMonth() + 1 < 10
                ? `0${date.getMonth() + 1}`
                : date.getMonth() + 1;
        day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    }
    const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minute =
        date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const second =
        date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    if (!flag) {
        return `${hour}:${minute}:${second}`;
    } else {
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    }
}

export interface  PageFormat {
    page: number;
    pageSize: number;
    totalSize: number;
}


export function getUUID() {
    return guid();
}

function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


