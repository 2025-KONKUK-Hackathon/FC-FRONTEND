import { useState, useRef, useEffect, useCallback } from 'react';
import * as styles from './DropDown.css';
import type { DropDownSize, DropDownOption } from './constant/dropDown';
import { Ic_chevron_down, Ic_chevron_up } from '@svg/index';

interface DropDownProps {
  options: DropDownOption[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  placeholder?: string;
  size?: DropDownSize;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onOpen?: () => void;
  onClose?: () => void;
}

export default function DropDown({
  options,
  selectedValue,
  setSelectedValue,
  placeholder = '옵션을 선택하세요',
  size = 'medium',
  disabled = false,
  onChange,
  onOpen,
  onClose,
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === selectedValue);
  const isSelected = selectedOption && selectedValue !== 'ALL';

  // 외부 클릭 감지
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        if (isOpen) {
          setIsOpen(false);
          onClose?.();
        }
      }
    },
    [isOpen, onClose]
  );

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

  const handleOptionSelect = useCallback(
    (option: DropDownOption) => {
      if (option.disabled) return;

      setSelectedValue(option.value);
      setIsOpen(false);
      onChange?.(option.value);
      onClose?.();
    },
    [setSelectedValue, onChange, onClose]
  );

  return (
    <div className={styles.dropdownContainer} ref={containerRef}>
      <button
        type="button"
        className={styles.dropdownTrigger({ size, isSelected: !!isSelected })}
        onClick={handleToggle}
        disabled={disabled}
      >
        <div
          className={`${styles.dropdownText} ${selectedOption && selectedValue !== 'ALL' ? '' : styles.placeholder}`}
        >
          {selectedOption && selectedValue !== 'ALL' ? selectedOption.label : placeholder}
        </div>
        <div className={styles.toggleIcon}>
          {/* 아이콘 추가 필요 */}
          {isOpen ? (
            <Ic_chevron_up className={styles.dropdownIcon({ isSelected: isSelected })} />
          ) : (
            <Ic_chevron_down className={styles.dropdownIcon({ isSelected: isSelected })} />
          )}
        </div>
      </button>

      <div className={styles.dropdownMenu({ isOpen })}>
        {options.map(option => (
          <button
            key={option.value}
            type="button"
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
