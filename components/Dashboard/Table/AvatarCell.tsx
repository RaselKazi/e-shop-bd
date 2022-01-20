import Image from 'next/image'

type avatar = {
  value: any
  column: any
  row: any
}

export function AvatarCell({ value, column, row }: avatar) {
  return (
    <div className="flex justify-between items-center">
      <div className=" h-full w-full -space-x-5 inline-block">
        {row.original[column.imgAccessor].map((img) => {
          return (
            <Image
              className="rounded-full hover:opacity-80"
              alt="h"
              src={img.url}
              layout="fixed"
              width={40}
              height={40}
            />
          )
        })}
      </div>
      <div className="ml-4">
        <div className="text-sm font-medium text-gray-100">{value}</div>
        {/* <div className="text-sm text-gray-400">
          {row.original[column.imgAccessor]}
        </div> */}
      </div>
    </div>
  )
}
