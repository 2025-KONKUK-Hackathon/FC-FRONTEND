import { useState, useRef, useEffect, useCallback } from 'react';
import * as styles from './DropDown.css';
import type { DropDownSize, DropDownOption } from './constant/dropDown';

interface DropDownProps {
  options: DropDownOption[];
  defaultValue?: string;
  placeholder?: string;
  size?: DropDownSize;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onOpen?: () => void;
  onClose?: () => void;
}

export default function DropDown({
  options,
  defaultValue,
  placeholder = '옵션을 선택하세요',
  size = 'medium',
  disabled = false,
  onChange,
  onOpen,
  onClose,
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue || '');
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === selectedValue);

  // 외부 클릭 감지
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      if (isOpen) {
        setIsOpen(false);
        onClose?.();
      }
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  const handleToggle = useCallback(() => {
    if (disabled) return;
    
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    
    if (newIsOpen) {
      onOpen?.();
    } else {
      onClose?.();
    }
  }, [disabled, isOpen, onClose, onOpen]);

  const handleOptionSelect = useCallback((option: DropDownOption) => {
    if (option.disabled) return;
    
    setSelectedValue(option.value);
    setIsOpen(false);
    onChange?.(option.value);
    onClose?.();
  }, [onChange, onClose]);

  return (
    <div className={styles.dropdownContainer} ref={containerRef}>
      <button
        type='button'
        className={styles.dropdownTrigger({ size })}
        onClick={handleToggle}
        disabled={disabled}
      >
        <div className={selectedOption ? '' : styles.placeholder}>
          {selectedOption?.label || placeholder}
        </div>
        <div>
          {/* 아이콘 추가 필요 */}
          {isOpen ? '▲' : '▼'}
        </div>
      </button>

      <div className={styles.dropdownMenu({ isOpen })}>
        {options.map((option) => (
          <button
            key={option.value}
            type='button'
            className={styles.dropdownOption({ size })}
            onClick={() => handleOptionSelect(option)}
            disabled={option.disabled}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
