export const downloadGif = (gifUrl: string) => {
    const a = document.createElement('a');
    a.href = gifUrl;
    a.download = gifUrl;
    a.click();
};
