function Add1({ a, b }: { a: number; b: number }) {
    return (
        <div>
            <h3>Add</h3>
            a = {a}<br />
            b = {b}<br />
            a + b = {a + b}
        </div>
    );
}

export default Add1;