import { create } from "zustand";

const useRoomReviewModal = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRoomReviewModal;
