export default function sortNotes({notes}) {
  notes.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  return {
    notes
  };
}
