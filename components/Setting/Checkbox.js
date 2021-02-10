export default function Checkbox({ name }) {
    return(
        <label className="checkbox bounce checkbox-label">
            <input type="checkbox" defaultChecked />
            <svg viewBox="0 0 21 21"><polyline points="5 10.75 8.5 14.25 16 6"></polyline></svg>
            {name}
        </label>
    );
}