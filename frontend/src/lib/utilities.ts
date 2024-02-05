export function isURL(str: string) {
    // Regular expression for a URL
    const urlPattern =
        /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(:\d{1,5})?[/\w .-]*$/i;

    return urlPattern.test(str);
}

export function toMail(str: string) {
    const emailPattern = /^mailto:[^\s@]+@[^\s@]+\.[^\s@]+$/i;

    return emailPattern.test(str);
}
