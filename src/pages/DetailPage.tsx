import React from "react";
import NoteDetail from "../components/NoteDetail";
import { getNote } from "../utils/api";
import { useParams } from "react-router-dom";
import Note from "../interface/noteIface";

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [note, setNote] = React.useState<Note | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!id) {
      setError("Invalid Note ID");
      setIsLoading(false);
      return;
    }

    const getDetailNote = async () => {
      try {
        setIsLoading(true);
        const { data } = await getNote(id);
        if (data) {
          setNote(data);
        } else {
          setError("Note not found.");
        }
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Failed to fetch note details."
        );
      } finally {
        setIsLoading(false);
      }
    };

    getDetailNote();
  }, [id]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return note ? <NoteDetail {...note} /> : <div>Note not available</div>;
};

export default DetailPage;