import addTicket from "../ServerActions";
import SubmitButton from "@/app/components/SubmitButton";
export default function CreateForm() {
  return (
    <form action={addTicket} className="w-1/2">
      <label>
        <span>Title:</span>
        <input required type="text" name="title" />
      </label>
      <label>
        <span>Body:</span>
        <textarea required name="body" />
      </label>
      <label>
        <span>Priority:</span>
        <select name="priority">
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <SubmitButton />
      {/* <button className="btn-primary" disabled={isLoading}>
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Ticket</span>}
      </button> */}
    </form>
  );
}
