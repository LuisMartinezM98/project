import { stripBasename } from "@remix-run/router";
import BookingCotent from "./BookingContent"

function ConfirmedBooking() {

    let handleSubmit = async(e) => {
        let res = await fetch(BookingCotent,{
            method: "POST",
            body: JSON.stringify({
                name: name,
                email:email,
                telephone: telephone,
                occasion: occasion,
                guests: guests,
                date: date,
            }),
        });
        let resJson = await res.json();
        if (res.status === 200){
            set
        }
    }
}