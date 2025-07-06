import React from 'react';
import { 
  ZoomIn, 
  ZoomOut, 
  Maximize, 
  ChevronLeft, 
  ChevronRight,
  RotateCw,
  Maximize2,
  Search
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const PDFControls = ({ 
  currentPage, 
  numPages, 
  scale, 
  onScaleChange, 
  onPageChange,
  onToggleFullscreen,
  isFullscreen,
  onRotate,
  rotation,
  searchTerm,
  onSearchChange
}) => {
  const zoomIn = () => onScaleChange(Math.min(scale + 0.25, 3));
  const zoomOut = () => onScaleChange(Math.max(scale - 0.25, 0.5));
  const fitToWidth = () => onScaleChange(1);
  
  const goToPrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };
  
  const goToNextPage = () => {
    if (currentPage < numPages) onPageChange(currentPage + 1);
  };

  const handlePageInputChange = (e) => {
    const page = parseInt(e.target.value);
    if (page >= 1 && page <= numPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center gap-2 p-3 bg-white border-b border-gray-200 shadow-sm">
      {/* Page Navigation */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={goToPrevPage}
          disabled={currentPage <= 1}
          className="h-8 w-8 p-0"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex items-center gap-1 text-sm">
          <Input
            type="number"
            value={currentPage}
            onChange={handlePageInputChange}
            min={1}
            max={numPages}
            className="w-16 h-8 text-center text-sm"
          />
          <span className="text-gray-600">/ {numPages}</span>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={goToNextPage}
          disabled={currentPage >= numPages}
          className="h-8 w-8 p-0"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <Separator orientation="vertical" className="h-6" />

      {/* Zoom Controls */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={zoomOut}
          disabled={scale <= 0.5}
          className="h-8 w-8 p-0"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        
        <span className="text-sm font-medium w-12 text-center">
          {Math.round(scale * 100)}%
        </span>
        
        <Button
          variant="outline"
          size="sm"
          onClick={zoomIn}
          disabled={scale >= 3}
          className="h-8 w-8 p-0"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={fitToWidth}
          className="h-8 px-2"
        >
          <Maximize2 className="h-4 w-4" />
        </Button>
      </div>

      <Separator orientation="vertical" className="h-6" />

      {/* Rotation */}
      <Button
        variant="outline"
        size="sm"
        onClick={onRotate}
        className="h-8 w-8 p-0"
        title="Rotate 90°"
      >
        <RotateCw className="h-4 w-4" />
      </Button>

      <Separator orientation="vertical" className="h-6" />

      {/* Search */}
      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-8 h-8 w-40"
          />
        </div>
      </div>

      <div className="flex-1" />

      {/* Fullscreen Toggle */}
      <Button
        variant="outline"
        size="sm"
        onClick={onToggleFullscreen}
        className="h-8 w-8 p-0"
        title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
      >
        <Maximize className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default PDFControls;