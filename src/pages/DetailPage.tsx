import React from "react";
import NoteDetail from "../components/NoteDetail";
import { getNote } from "../utils/api";
import { useParams } from "react-router-dom";
import Note from "../interface/noteIface";
import PropTypes from "prop-types";

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [ note, setNote ] = React.useState<Note | null>(null);
  const [ isLoading, setIsLoading ] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if(!id) {
      setError('Invalid Note ID');
      setIsLoading(false);
      return;
    }

    const getDetailNote = async () => {
      try {
        const { data } = await getNote(id);
        setNote(data);
      } catch (error) {
        setError('Failed to getDetailNote');
      } finally {
        setIsLoading(false)
      }
    };

    getDetailNote();
  }, [id]);

  return note ? <NoteDetail {...note}  /> : <p>Loading...</p>;
}

export default DetailPage;
