import React from "react";
import NoteDetail from "../components/NoteDetail";
import { getNote } from "../utils";
import { useParams } from "react-router-dom";
import Note from "../interface/noteIface";

// State untuk DetailPage
interface DetailPageState {
  notes: Note | null;
}

interface DetailPageProps {
  id: number;
}

const DetailPageWrapper: React.FC = () => {
  const { id } = useParams();

  return <DetailPage id={Number(id)} />;
};

class DetailPage extends React.Component<DetailPageProps, DetailPageState> {
  constructor(props: DetailPageProps) {
    super(props);

    this.state = {
      notes: getNote(props.id),
    };
  }

  render() {
    const { notes } = this.state;

    if (!notes) {
      return <p>Note not found!</p>;
    }

    return <NoteDetail {...notes} />;
  }
}

export default DetailPageWrapper;
