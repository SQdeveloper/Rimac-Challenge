export function calculateAge(birthDate: string): number {    
    const [day, month, year] = birthDate.split("-").map(Number);    
    const currentDate = new Date();
    
    let age = currentDate.getFullYear() - year;

    if (
        currentDate.getMonth() + 1 < month || 
        (currentDate.getMonth() + 1 === month && currentDate.getDate() < day)
    ) {
        age--;
    }

    return age;
}