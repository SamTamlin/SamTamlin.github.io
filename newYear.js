

setInterval(() => {
    const timeNow = new Date(Date.now());
    const nextYear = timeNow.getFullYear()+1;
    const newYear = new Date(`January 01, ${nextYear} 00:00:00`)
    const intlNumberFormatter = new Intl.NumberFormat("en-UK");
    const difference = Math.floor((newYear.getTime() - timeNow.getTime()) / 1000);
    const seconds = intlNumberFormatter.format(difference);
    const days = intlNumberFormatter.format(difference/86400);
    let rDays = Math.floor(days);
    message = `Seconds: ${seconds}`;
    const input = document.getElementById("seconds");
    input.innerHTML = `${rDays} days or ${seconds} seconds`;
 }, 1000);