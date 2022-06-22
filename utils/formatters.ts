// Capitalize Text
export const capitalize = (str: string | any) => {
    return str?.replace(/\w\S*/g, (t: string) => {
        return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
    });
};

// emmanuelomare
// Admin@1234