import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "searchUsers"
})

// export class SearchUsers implements PipeTransform {
//     transform(users: Array<any>, value: Array<any>) {
//         let arrTotal: Array<any> = [];
//         for(let i=0; i<users.length; i++) {
//             for(let j=0; j<value.length; j++) {
//                 if(users[i].email === value[j]) {
//                     arrTotal.push(users[i]);
//                 }
//             }
//         }
//         return arrTotal;
//     }
// }

export class SearchUsers implements PipeTransform {
    transform(users: Array<any>, value: Array<any>) {
        let arrTotal: Array<any> = [];
        console.log(value);
        if(value.length !== 0) {
            for(let i=0; i<users.length; i++) {
                for(let j=0; j<value.length; j++) {
                    if(users[i].email === value[j]) {
                        arrTotal.push(users[i]);
                    }
                }
            };
            return arrTotal;
        } else {
            arrTotal.length = 0; //?
            return users;
        }
    };
};

// export class SearchUsers implements PipeTransform {
//     transform(users: Array<any>, value: Array<any>) {
//         return users?.filter(user => {
//             return user.email.includes(value[0])
//         })
//     };
// };