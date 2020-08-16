import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "search"
})

export class SearchPipe implements PipeTransform {
    transform(users: Array<any>, value: string) {
        return users?.filter(user => {
            return user.email.includes(value)
        })
    }
}