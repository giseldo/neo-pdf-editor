import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const HelpButton = () => {
  const features = [
    "Upload and view PDF files",
    "Navigate through pages with arrow controls",
    "Zoom In/Out with precise scale control (50% - 300%)",
    "Rotate pages 90° clockwise",
    "Fit page to width for optimal viewing",
    "Fullscreen mode for distraction-free reading",
    "Search within PDF content",
    "Reorder pages via drag and drop",
    "Delete pages with confirmation",
    "Merge multiple PDFs seamlessly",
    "Save and download modified PDFs",
    "Rename PDFs with inline editing",
    "Keyboard shortcuts (Ctrl/Cmd + +/- for zoom, R for rotate, F for fullscreen)",
    "Loading states and error handling",
    "Responsive design for all devices"
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-4 right-4 rounded-full z-50 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none hover:from-purple-600 hover:to-pink-600"
        >
          <HelpCircle className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>PDF Editor Features</DialogTitle>
        </DialogHeader>
        <ul className="list-disc pl-5 space-y-2">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default HelpButton;
