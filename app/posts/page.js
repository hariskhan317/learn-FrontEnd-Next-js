import Button from '@/app/posts/button'
async function postList() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        return data; 
    } catch (error) {
        console.log(error);
    }
}

export default async function Product() {
    let users = await postList();
    return (
        <ul>
            {users.map((user, index) => {
                return (
                    <>
                        <li key={index}>{user.name}</li>
                        <Button email={user.email} />
                </>
                )
            })}
        </ul>
   )
}